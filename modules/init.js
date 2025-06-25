import OptolithParser from "./parser.js"

Hooks.once("ready", () => {
    game.dsa5.optolith = OptolithParser
})

Hooks.on("renderActorDirectory", (app, html, data) => {
    const jHtml = $(html);
    if (game.user.can("ACTOR_CREATE")) {
        const button = $(`<button data-tooltip="Optolith.hint1"><i class="fas fa-file-import"></i>Optolith</button>`)
        jHtml.find(".header-actions").append(button)
        button.click(() => { game.dsa5.optolith.openDialog() });       
    }
})