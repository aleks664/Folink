class animateHowWorks {
    constructor($container) {
        this.$container = $container;
        this.$man = $container.querySelector('#man');
        this.$bg = $container.querySelector('.bg');
        this.$messageHero = $container.querySelector('#message-hero')
        this.$messageBuddy = $container.querySelector('#message-buddy')
        this.$messageRefill = $container.querySelector('#message-refill')
        this.animBg = new TimelineMax();
        this.timeAnimBg = 20;
        this.timeAnimPerson = 1;
        this.progress = {
            step1: {
                leftPosition: 1715,
                dialog: [
                    {
                        box: this.$messageHero,
                        message: 'Привет, да, есть хорошая компания, у нее кеш возвращается и льготного периода нету',
                    },
                    {
                        box: this.$messageBuddy,
                        message: 'Круто! Мне такой и нужен, а как я могу получить данную карту?'
                    },
                    {
                        box: this.$messageHero,
                        message: 'Я тебе в Whatsapp пришлю ссылку, перейдешь и оформишь'
                    },
                    {
                        box: this.$messageBuddy,
                        message: 'Отлично, так будет удобнее. Тогда жду от тебя ссылку'
                    }
                ],
                refill: {
                    leftPosition: 750,
                    sum: '4500 р.',
                    message: 'Ваш друг оформил, дебетовую карту' +
                        'Тинькофф Блэк'
                }
            },
            step2: {
                leftPosition: 1715,
                dialog: [
                    {
                        box: this.$messageHero,
                        message: 'step2 Привет, да, есть хорошая компания, у нее кеш возвращается и льготного периода нету',
                    },
                    {
                        box: this.$messageBuddy,
                        message: 'Круто! Мне такой и нужен, а как я могу получить данную карту?'
                    },
                    {
                        box: this.$messageHero,
                        message: 'Я тебе в Whatsapp пришлю ссылку, перейдешь и оформишь'
                    },
                    {
                        box: this.$messageBuddy,
                        message: 'Отлично, так будет удобнее. Тогда жду от тебя ссылку'
                    }
                ],
                refill: {
                    leftPosition: 2150,
                    sum: '4500 р.',
                    message: 'step2 пополнение Ваш друг оформил, дебетовую карту' +
                        'Тинькофф Блэк'
                }
            },
            step3: {
                leftPosition: 3150,
                dialog: [
                    {
                        box: this.$messageHero,
                        message: 'step3 Привет, да, есть хорошая компания, у нее кеш возвращается и льготного периода нету',
                    },
                    {
                        box: this.$messageBuddy,
                        message: 'Круто! Мне такой и нужен, а как я могу получить данную карту?'
                    },
                    {
                        box: this.$messageHero,
                        message: 'Я тебе в Whatsapp пришлю ссылку, перейдешь и оформишь'
                    },
                    {
                        box: this.$messageBuddy,
                        message: 'Отлично, так будет удобнее. Тогда жду от тебя ссылку'
                    }
                ],
                refill: {
                    leftPosition: 3700,
                    sum: '4500 р.',
                    message: 'step2 пополнение Ваш друг оформил, дебетовую карту' +
                        'Тинькофф Блэк'
                }
            }
        }
        this.start();

    }

    start() {
        this.animateBg();
        this.animatePerson();
    }

    animateStop () {
        this.animBg.pause();
        this.animHandFirst.pause();
        this.animHandTwo.pause();
        this.animLegFirst.pause();
        this.animLegTwo.pause();
    }

    animatePlay () {
        this.animBg.play();
        this.animHandFirst.play();
        this.animHandTwo.play();
        this.animLegFirst.play();
        this.animLegTwo.play();
    }

    animatePersonRestart() {
        this.animHandFirst.restart(0);
        this.animHandTwo.restart(0);
        this.animLegFirst.restart(0);
        this.animLegTwo.restart(0);
    }

    animatePerson() {
        let person = this.$man;
        let time = this.timeAnimPerson;
        let handFirst = person.querySelectorAll('.hand-first');
        let handTwo = person.querySelectorAll('.hand-two');
        let legFirst = person.querySelectorAll('.leg-first');
        let legTwo = person.querySelectorAll('.leg-two');

        this.animHandFirst = new TimelineMax();
        this.animHandTwo = new TimelineMax();
        this.animLegFirst = new TimelineMax();
        this.animLegTwo = new TimelineMax();

        this.animHandFirst
            .to(handFirst, 27/72*time, {
                rotation: -27,
                transformOrigin: '5 10',
                ease: Power0.easeNone,
            })
            .to(handFirst, time, {
                rotation: 45,
                transformOrigin: '5 10',
                ease: Power0.easeNone,
            })
            .to(handFirst, 45/72*time, {
                rotation: 0,
                transformOrigin: '5 10',
                ease: Power0.easeNone,
            });
        this.animHandTwo
            .to(handTwo, 45/72*time, {
                rotation: 45,
                transformOrigin: '5 5',
                ease: Power0.easeNone,
            })
            .to(handTwo, time, {
                rotation: -27,
                transformOrigin: '5 5',
                ease: Power0.easeNone,
            })
            .to(handTwo, 27/72*time, {
                rotation: 0,
                transformOrigin: '5 5',
                ease: Power0.easeNone,
            });
        this.animLegFirst
            .to(legFirst, 35/60*time, {
                rotation: 35,
                transformOrigin: '10 5',
                ease: Power0.easeNone,
            })
            .to(legFirst, time, {
                rotation: -25,
                transformOrigin: '10 5',
                ease: Power0.easeNone,
            })
            .to(legFirst, 15/60*time, {
                rotation: 0,
                transformOrigin: '10 5',
                ease: Power0.easeNone,
            })
        this.animLegTwo
            .to(legTwo, 35/60*time, {
                rotation: -25,
                transformOrigin: '10 5',
                ease: Power0.easeNone,
            })
            .to(legTwo, time, {
                rotation: 35,
                transformOrigin: '10 5',
                ease: Power0.easeNone,
            })
            .to(legTwo, 15/60*time, {
                rotation: 0,
                transformOrigin: '10 5',
                ease: Power0.easeNone,
                onComplete: () => {
                    this.animatePersonRestart();
                }
            })
    }

    refill(data) {
        this.$messageRefill.querySelector('.sum').innerHTML = data.sum;
        this.$messageRefill.querySelector('.txt').innerHTML = data.message;
        this.$messageRefill.classList.add('active');
        let interval = setTimeout(() => {
            this.$messageRefill.classList.remove('active');
            clearTimeout(interval)
        }, 2500)

    }


    animateBg() {
        let $bg = this.$bg,
            thisEv = this,
            $pict = $bg.querySelector('.pict'),
            left = -1 * $pict.width,
            clonePict = $pict.cloneNode();
        clonePict.classList.remove('pict')
        clonePict.classList.add('clone')
        if (!$bg.querySelector('.copy')) {
            $bg.appendChild(clonePict)
        }
        this.animBg
            .set($bg, {
                left: '0'
            })
            .to($bg, this.timeAnimBg, {
                left: left,
                ease: Power0.easeNone,
                onCompleteScope: this.timeAnimBg,
                onUpdate: () => {
                    left = $bg.style.left.replace(/px$/, '') * -1;
                    if (left > 0 && left < this.progress.step2.leftPosition && this.$container.classList.contains('step1') ) {
                        this.$container.classList.remove('step1')
                        this.$container.classList.add('step2')
                        this.animateStop();
                        this.animateMessages('step1')
                    } else if  (left > this.progress.step1.refill.leftPosition && left < this.progress.step2.leftPosition && this.$container.classList.contains('retail1')) {
                        this.$container.classList.remove('retail1')
                        this.$container.classList.add('retail2')
                        this.refill(this.progress.step1.refill)
                    } else if (left > this.progress.step2.leftPosition && this.$container.classList.contains('step2')) {
                        this.$container.classList.remove('step2')
                        this.$container.classList.add('step3')
                        this.animateStop();
                        this.animateMessages('step2')
                    } else if (left >this.progress.step2.refill.leftPosition && this.$container.classList.contains('retail2')) {
                        this.$container.classList.remove('retail2')
                        this.$container.classList.add('retail3')
                        this.refill(this.progress.step2.refill)
                        // this.animateStop();
                    } else if (left > this.progress.step3.leftPosition && this.$container.classList.contains('step3')) {
                        this.$container.classList.remove('step3')
                        this.$container.classList.add('step1')
                        this.animateStop();
                        this.animateMessages('step3')
                    } else if (left >this.progress.step3.refill.leftPosition && this.$container.classList.contains('retail3')) {
                        this.$container.classList.remove('retail3')
                        this.$container.classList.add('retail1')
                        this.refill(this.progress.step2.refill)
                    }
                },
                onComplete: () => {
                    this.animateBg();
                }
            });
    }

    animateMessages(step) {
        let countMes = 0;
        const dialog = (mes) => {
            let mess = mes;
            let count = 0;
            let newTxt = '';
            let timeout = 50;

            function typing(txt, $box){
                $box.classList.add('active');
                let interval =  setTimeout(() => {
                    if (count < txt.length) {
                        newTxt += txt[count]
                        $box.innerHTML = newTxt +'|';
                        count ++;
                        typing(txt, $box);
                    } else {
                        $box.innerHTML = newTxt;
                        clearTimeout(interval)
                        let interval2 = setTimeout(() => {
                            $box.classList.remove('active');
                            clearTimeout(interval2)
                        }, 1000)
                        let interval3 = setTimeout(() => {
                            dialog(mess);
                            clearTimeout(interval3)
                        }, 1500)

                    }
                }, timeout);
            }
            if (mes[countMes]) {
                mes[countMes].box.innerHTML = '';
                typing(mes[countMes].message, mes[countMes].box);
                countMes++;
            } else {
                countMes = 0;
                this.animatePlay();
            }

        }
        dialog(this.progress[step].dialog)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('#section-how-works')) new animateHowWorks(document.querySelector('#section-how-works'));
});
