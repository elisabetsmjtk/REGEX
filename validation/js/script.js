$(function ()
{
    const usernameRegex =  /^[\w]{5,16}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const idnphoneRegex =  /^(\+62|0)(\d{3,4}-?){2}\d{3,4}$/;
    const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    const kodeposRegex = /^[1-9][0-9]{4}$/;
    
    $('input').each(function ()
    { 
        $(this).on('input', function()
        {
            const valElement = $(this).parent().siblings().filter('p');

            if ($(this).attr('id') == 'username')
            {
                if (usernameRegex.test($(this).val()))
                {
                    $(this).removeClass('focus:ring-violet-500 focus:ring-rose-500')
                    $(this).addClass('focus:ring-emerald-600')

                    valElement.html('Valid Username')
                    valElement.removeClass('text-violet-300 text-rose-600')
                    valElement.addClass('text-emerald-600')
                }
                else 
                {
                    $(this).removeClass('focus:ring-violet-500 focus:ring-emerald-600')
                    $(this).addClass('focus:ring-rose-500')

                    valElement.html('Username must be alphanumeric and contain 5-16 characters')
                    valElement.removeClass('text-violet-300 text-emerald-600')
                    valElement.addClass('text-rose-600')
                }
            }
            else if($(this).attr('id') == 'email')
            {
                if(emailRegex.test($(this).val()))
                {
                    $(this).removeClass('focus:ring-violet-500 focus:ring-rose-500')
                    $(this).addClass('focus:ring-emerald-600')

                    valElement.html('Valid E-mail')
                    valElement.removeClass('text-violet-300 text-rose-600')
                    valElement.addClass('text-emerald-600')
                }
                else 
                {
                    $(this).removeClass('focus:ring-violet-500 focus:ring-emerald-600')
                    $(this).addClass('focus:ring-rose-500')

                    valElement.html('Please input a valid e-mail address, e.g me@gmail.com')
                    valElement.removeClass('text-violet-300 text-emerald-600')
                    valElement.addClass('text-rose-600')
                }
            }
            else if($(this).attr('id') == 'phone')
            {
                if(idnphoneRegex.test($(this).val()))
                {
                    $(this).removeClass('focus:ring-violet-500 focus:ring-rose-500')
                    $(this).addClass('focus:ring-emerald-600')

                    valElement.html('Valid Telephone Number')
                    valElement.removeClass('text-violet-300 text-rose-600')
                    valElement.addClass('text-emerald-600')
                }
                else 
                {
                    $(this).removeClass('focus:ring-violet-500 focus:ring-emerald-600')
                    $(this).addClass('focus:ring-rose-500')

                    valElement.html('Telephone must be a valid IDN telephon number')
                    valElement.removeClass('text-violet-300 text-emerald-600')
                    valElement.addClass('text-rose-600')
                }
            }
            else if($(this).attr('id') == 'slug')
            {
                if(slugRegex.test($(this).val()))
                {
                    $(this).removeClass('focus:ring-violet-500 focus:ring-rose-500')
                    $(this).addClass('focus:ring-emerald-600')

                    valElement.html('Valid Slug')
                    valElement.removeClass('text-violet-300 text-rose-600')
                    valElement.addClass('text-emerald-600')
                }
                else 
                {
                    $(this).removeClass('focus:ring-violet-500 focus:ring-emerald-600')
                    $(this).addClass('focus:ring-rose-500')

                    valElement.html('Please input valid slug')
                    valElement.removeClass('text-violet-300 text-emerald-600')
                    valElement.addClass('text-rose-600')
                }
            }
            else if($(this).attr('id') == 'zip-code')
            {
                if(kodeposRegex.test($(this).val()))
                {
                    $(this).removeClass('focus:ring-violet-500 focus:ring-rose-500')
                    $(this).addClass('focus:ring-emerald-600')

                    valElement.html('Valid Zip Code')
                    valElement.removeClass('text-violet-300 text-rose-600')
                    valElement.addClass('text-emerald-600')
                }
                else 
                {
                    $(this).removeClass('focus:ring-violet-500 focus:ring-emerald-600')
                    $(this).addClass('focus:ring-rose-500')

                    valElement.html('Please input a valid IDN zip code, e.g. 21155')
                    valElement.removeClass('text-violet-300 text-emerald-600')
                    valElement.addClass('text-rose-600')
                }
            }
        })
    })
})