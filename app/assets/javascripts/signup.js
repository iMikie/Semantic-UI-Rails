$(document)
    .ready(function () {
        var validations = {
    //    firstName: {
    //        identifier: 'first-name',
    //        rules: [
    //            { type: 'empty', prompt: 'Please enter your first name'}
    //        ]
    //    },
    //    skills: {
    //        identifier: 'skills',
    //        rules: [
    //            { type: 'minCount[1]', prompt: 'Please select at least two skills'}
    //        ]
    //    },
    //    name: {
    //        identifier: 'name',
    //        rules: [
    //            { type: 'empty', prompt: 'Please enter your name'}
    //        ]
    //    },
    //    gender: {
    //        identifier: 'gender',
    //        rules: [
    //            { type: 'empty', prompt: 'Please select a gender'}
    //        ]
    //    },
    //    lastName: {
    //        identifier: 'last-name',
    //        rules: [
    //            {type: 'empty', prompt: 'Please enter your last name'}
    //        ]
    //    },
    //    username: {
    //        identifier: 'username',
    //        rules: [
    //            {type: 'empty', prompt: 'Please enter a username'},
    //            {type: 'length[5]', prompt: 'Your username must be at least 5 characters'}
    //        ]
    //    },
    //    email: {
    //        identifier: 'email',
    //        rules: [
    //            {type: 'email', prompt: 'Please enter a valid e-mail'}
    //        ]
    //    },
    //    password: {
    //        identifier: 'password',
    //        rules: [
    //            { type: 'empty', prompt: 'Please enter a password'},
    //            { type: 'length[6]', prompt: 'Your password must be at least 6 characters'}
    //        ]
    //    },
    //    passwordConfirm: {
    //        identifier: 'password-confirm',
    //        rules: [
    //            {
    //                type: 'empty',
    //                prompt: 'Please confirm your password'
    //            },
    //            {
    //                identifier: 'password-confirm',
    //                type: 'match[password]',
    //                prompt: 'Please verify password matches'
    //            }
    //        ]
    //    },
    terms: {
        identifier: 'terms',
        rules: [
            {
                type: 'checked',
                prompt: 'You must agree to the terms and conditions'
            }
        ]
    }
};


var settings = {
    inline: true,
    onFailure: function () {
        return false;
    },
    onSuccess: function () {
        //    //do some ajax here, or maybe don't need it, just return it
        $('#to-slide-up').slideUp(400);
        $('#submit-thanks').shape('flip down');
        return false;
    }
};

$('.ui.form').form(validations, settings); //note the '.' at the beginning.


}
)
;