module.exports = function(){ return this.create().html('<div id="test">hello ').textBinding({ fn: function(){ return this.ref('first.name').value() }, refs: ['first.name'] }).html(', how are you today? Here\'s a list of your friends: <br/>').blockBinding({'each': { fn: function(){ return this.ref('friends').value() }, refs: ['friends'] },'as': { fn: function(){ return 'friend' }, refs: [] }}, this.create().html('').textBinding({ fn: function(){ return this.ref('friend.name').value() }, refs: ['friend.name'] }).html('').textBinding({ fn: function(){ return this.ref('first.name').value() }, refs: ['first.name'] }).html('<br/>')).html('</div>').blockBinding({'template': { fn: function(){ return 'fish' }, refs: [] }}, this.create().html('hello ').textBinding({'html': { fn: function(){ return this.ref('blockContent').value() }, refs: ['blockContent'] }}).html(' Foot? ').textBinding({'html': { fn: function(){ return this.ref('footer').value() }, refs: ['footer'] }}).html('')).html('').blockBinding({'component': { fn: function(){ return 'fish' }, refs: [] },'item': { fn: function(){ return this.ref('first').value() }, refs: ['first'] }}, this.create().html('').blockBinding({'block': { fn: function(){ return 'blockContent' }, refs: [] }}, this.create().html('<span>').textBinding({ fn: function(){ return this.ref('first.name').value() }, refs: ['first.name'] }).html(' has ').textBinding({ fn: function(){ return this.ref('friends.length').value() }, refs: ['friends.length'] }).html(' friends! </span>')).html('').blockBinding({'block': { fn: function(){ return 'footer' }, refs: [] }}, this.create().html('Footer! ')).html('')).html('') }