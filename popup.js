const clipMarkup = `
<div class="clip-container">
    <div class="clip">
    <div class="clip-header">
        <div class="clip-title">#1</div>
        <div class="clip-x">-</div>
    </div>
    <div class="form-element">
        <div class="form-label">prepend</div>
        <input id="prepend" class="form-input"></input>
    </div>
    <div class="form-element">
        <div class="form-label">append</div>
        <input id="append" class="form-input"></input>
    </div>
    <div class="form-element">
        <div class="form-label">include</div>
        <input id="include" class="form-input"></input>
    </div>
    <div class="form-element">
        <div class="form-label">exclude</div>
        <input id="exclude" class="form-input"></input>
    </div>
    </div>
</div>
`;

let clips = []

chrome.storage.sync.get("clips", ({ c }) => {
    if(c) {
        clips = c;
    }
});

let rerenderClips = () => {
    const clipsEl = document.getElementById("clips");
    clips.forEach(clip => {
        const el = document.createElement("div");
        el.innerHTML = clipMarkup;
        // el.getElementById("prepend").value = clip.prepend;
        clipsEl.appendChild(el);
    })
}

let addClip = () => {
    clips.push({
        prepend: "",
        append: "",
        include: "",
        exclude: ""
    });
    rerenderClips();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("add").onclick = addClip;
});
