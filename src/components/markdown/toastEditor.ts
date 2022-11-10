import { uploadImage } from "@/apis/uploadApi";

export default class {
    editor: toastui.Editor
    isFullscreen: boolean
    constructor(el: string, public height: string, initialValue: string) {
        this.editor = new toastui.Editor({
            el: document.querySelector(el),
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: height,
            initialValue: initialValue,
            toolbarItems: this.toolbar()
        });
        this.ImageHook()
    }
    private toolbar() {
        return [
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock'],
            // 自定义工具栏
            [{
                el: this.fullscreen(),
                command: 'fullscreen',
                tooltip: 'fullscreen'
            }]
        ]
    }
    private fullscreen() {
        const button = document.createElement('button') as HTMLButtonElement
        button.innerHTML = '全屏'
        button.style.margin = '0'
        button.addEventListener('click', () => {
            this.toggleFullscreen()
            // const editorEl = document.querySelector('.toastui-editor-defaultUI') as HTMLDivElement
            // editorEl.classList.toggle('fullscreen')
            // this.isFullscreen = !this.isFullscreen
            // if (this.isFullscreen === false) {
            //     this.editor.setHeight(this.height)
            // }
        })
        document.documentElement.addEventListener('keyup', (event: KeyboardEvent) => {
            if (event.key === 'Escape' && this.isFullscreen) {
                this.toggleFullscreen()
                // const editorEl = document.querySelector('.toastui-editor-defaultUI') as HTMLDivElement
                // editorEl.classList.remove('fullscreen')
                // this.editor.focus()
            }
        })
        return button
    }
    private toggleFullscreen() {
        const editorEl = document.querySelector('.toastui-editor-defaultUI') as HTMLDivElement
        editorEl.classList.toggle('fullscreen')
        this.isFullscreen = !this.isFullscreen
        if (this.isFullscreen === false) {
            this.editor.setHeight(this.height)
        } else {
            this.editor.setHeight('100vh')

        }
    }
    private ImageHook() {
        this.editor.removeHook('addImageBlobHook')
        this.editor.addHook('addImageBlobHook', async (blob: any, callback: Function) => {
            const form = new FormData()
            form.append('file', blob, blob.name)
            const response = await uploadImage(form)
            callback(response.result.url, blob.name)
        })
    }
}