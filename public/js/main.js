console.log(1)
$(document).ready(() => {
    $('#check').on('click', (e) => {
        e.preventDefault();

        const age = +$("#age").val();
        console.log(age);

        $.ajax({
            data: { age },
            url: '/things/checkAge',
            method: 'POST',
            success: function(data) {
                console.log(data);
            },
            error: function(err) {
                console.log(err.message)
            }
        })
    })
})