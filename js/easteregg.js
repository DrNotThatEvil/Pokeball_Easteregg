// Activated by the famous konami code.
// Up Up Down Down Left Right Left Right B A
// This easteregg is kind of buggy but still its cool
// if you love pokemon you will love this easteregg.
// o and you need jquery for this to work...

//Copyright (c) 2016 DrNotThatEvil
//Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var kindex = 0;
var attack_happening = false;
$(document).on('keydown', function(e) {
    if(e.keyCode === keys[kindex++]) {
        if(kindex === keys.length) {
            $(document).off('keydown');
            if(!attack_happening)
            {
                attack_happening = true;
                var div = $('<div></div>');
                div.css({
                    position: 'fixed',
                    left: '0px',
                    top: '0px',
                    width: '100%',
                    height: '100%'
                });

                $('body').append(div);
                var balls = [];
                var balldivs = [];
                var balldivsimg = [];

                for(var i =0; i < (div.height()/154); i++)
                {
                    balldivs[i] = $('<div></div>');
                    balldivs[i].css({
                        height: '154px',
                        float: ((i % 2) == 1 ? 'left' : 'right'),
                        backgroundColor: '#000',
                        width: '0%',
                        display: 'block',
                        clear: 'both',
                        overflow: 'visible'
                    });

                    var img = $('<img></img>');
                    img.attr('src', 'http://pre15.deviantart.net/8afd/th/pre/i/2013/326/4/8/flat_pokeball_by_himitsunochikara-d6v7eyk.png');
                    img.attr('class', ((i % 2) == 1 ? 'pokeball' : 'pokeball2') );
                    img.css({
                        top: '2px',
                        height: '200px',
                        transform: 'translateY(-23px) translateX(0%) rotate(0deg)',
                        float: ((i % 2) == 1 ? 'right' : 'left')
                    });
                    balldivs[i].append(img);
                    div.append(balldivs[i]);
                    balls.push(balldivs[i]);
                }

                var snd = new Audio("https://www.myinstants.com/media/sounds/pokemon-battle.mp3"); // buffers automatically when created
                snd.play();
                var shownTitle = false;

                setTimeout(function(){
                    balls.forEach(function(cur, index, arr) {
                        cur.animate({
                            width: '100%'
                        }, 2800, 'linear', function()
                    {
                        if(!shownTitle)
                        {
                            shownTitle = true;
                            var div2 = $('<div></div>');
                            div2.css({
                                position: 'fixed',
                                left: '0px',
                                top: '50%',
                                width: '100%',
                                height: '100%',
                                textAlign: 'center',
                                fontSize: '48px',
                                lineHeight: '100%',
                                color: '#fff'
                            });

                            div2.text("A wild easteregg has appeared!")

                            $('body').append(div2);

                            setTimeout(function(){
                                div.remove();
                                div2.remove();
                            }, 8000)
                        }
                    });
                    });
                }, 200)
            }
        }
    } else {
        kindex = 0;
    }
});
