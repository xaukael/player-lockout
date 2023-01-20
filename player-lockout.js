Hooks.once("init", async () => {
  game.settings.register('player-lockout', 'locked', {
    name: `Lock Session`,
    hint: `Determines whether the users are immediately logged out`,
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
    onChange: value => { }
  });
});
Hooks.on('renderNotifications', ()=>{if (!game.user.isGM && game.settings.get('player-lockout','locked')) game.logOut()})