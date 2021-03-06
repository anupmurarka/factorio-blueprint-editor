import * as PIXI from 'pixi.js'
import G from '../common/globals'
import { EditorMode } from '../containers/BlueprintContainer'
import { styles } from './style'

export class DebugContainer extends PIXI.Container {
    public x = 145
    public y = 5

    public constructor() {
        super()

        const fpsGUIText = new PIXI.Text('', styles.debug.text)
        this.addChild(fpsGUIText)

        G.app.ticker.add(() => {
            fpsGUIText.text = `${Math.round(G.app.ticker.FPS)} FPS`
        })

        const gridposGUIText = new PIXI.Text('', styles.debug.text)
        gridposGUIText.position.set(0, 32)
        this.addChild(gridposGUIText)

        const modeText = new PIXI.Text('', styles.debug.text)
        modeText.position.set(0, 64)
        this.addChild(modeText)

        const onUpdate32 = (x: number, y: number): void => {
            gridposGUIText.text = `X ${x} Y ${y}`
        }

        const onModeChange = (mode: EditorMode): void => {
            modeText.text = EditorMode[mode]
        }

        // when the blueprint container changes, reattach the events on the new one
        // for this to work the old container has to be destroyed after the new one has been created
        let bpc = G.BPC
        const attachBPCEvents = (): void => {
            bpc.gridData.on('update32', onUpdate32)
            bpc.on('mode', onModeChange)
            bpc.on('destroy', () => {
                bpc.gridData.off('update32', onUpdate32)
                bpc.off('mode', onModeChange)
                bpc = G.BPC
                attachBPCEvents()
            })
        }
        attachBPCEvents()
    }
}
