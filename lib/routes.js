

FlowRouter.route('/', {
    name: 'dashboard',
    action() {
        BlazeLayout.render('dashboard',{
            counter:'hello',
            info:'information'
        });
    }
});


FlowRouter.route('/test', {
    name: 'test',
    action() {
        BlazeLayout.render('test');
    }
});



