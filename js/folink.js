class gameFolink {
    constructor ($container) {
        this.$container = $container;
        this.$steps = $container.querySelector('.steps');
        this.$watsapp = $container.querySelector('.game-head .whatsapp');
        this.$folink = $container.querySelector('.game-head .folink');
        this.steps = this.$container.querySelectorAll('.step');
        this.balance = this.$container.querySelector('.game-head .center .balance span');
        this.$gameHeadCenter = this.$container.querySelector('.game-block .game-head .center')
        this.init();
    }

    init () {
        this.startGame();
        this.closeGame();
        this.openGetSum();
        this.nextStep();
    }

    firstStepActive () {
        if (!this.steps) return;
        this.balance.textContent = 0;
        this.$gameHeadCenter.classList.remove('active');
        this.steps.forEach(($step, index) => {
            if (index == 0) {
                $step.classList.add('active')
            } else {
                $step.classList.remove('active')
            }
        })
    }

    typingText($text) {
        let txt = $text.dataset.message ? $text.dataset.message: $text.textContent.replace(/\s+/g, ' ').trim();
        if (!$text.dataset.message) {
            $text.dataset.message = $text.textContent.replace(/\s+/g, ' ').trim();
        }
        let newTxt = '';

        $text.innerHTML = newTxt;
        let count   = 0,
            timeout = 50;
        function typing(){
            if ($text.closest('.step.active')) {
                let interval =  setTimeout(() => {
                    if (count < txt.length && $text.closest('.step.active')) {
                        newTxt += txt[count]
                        $text.innerHTML = newTxt +'|';
                        count ++;
                        typing();
                    } else {
                        $text.innerHTML = newTxt;
                    }
                }, timeout);
            }
        }
        typing();
    }

    startGame () {
        const buttonsStart = document.querySelectorAll('.start-game');
        buttonsStart.forEach($button => {
            $button.addEventListener('click', () => {
                // this.firstStepActive();
                this.typingText(this.steps[0].querySelector('.game-footer .text'))
                this.$container.classList.add('active');
                document.querySelector('html').classList.add('game-open');
            })
        })
    }

    nextStepVisible ($step) {
        if (this.$gameHeadCenter.querySelector('.js-next')) {
            this.$gameHeadCenter.querySelector('.js-next').classList.remove('js-next');
        }
        this.$container.querySelector('.step.active').classList.remove('active');
        $step.classList.add('active');
        if ($step.querySelector('.messenger')) {
            this.$watsapp.classList.add('active');
            this.$folink.classList.remove('active');
        } else {
            this.$watsapp.classList.remove('active');
            this.$folink.classList.add('active');
        }
        switch (this.url) {
            case 'step2':
                this.$gameHeadCenter.classList.add('active')
                break;
            case 'step7':
                this.$gameHeadCenter.querySelector('.whatsapp').classList.add('js-next')
                this.$gameHeadCenter.querySelector('.whatsapp').dataset.step = 'step8'
                break;
            case 'step15':
                this.$gameHeadCenter.querySelector('.folink').classList.add('js-next')
                this.$gameHeadCenter.querySelector('.folink').dataset.step = window.innerWidth < 768 ? 'step17':'step16'
                break;
            case 'step19':
                this.$gameHeadCenter.querySelector('.whatsapp').classList.add('js-next')
                this.$gameHeadCenter.querySelector('.whatsapp').dataset.step = 'step20'
                break;
            case 'step31':
                this.$gameHeadCenter.querySelector('.folink').classList.add('js-next')
                this.$gameHeadCenter.querySelector('.folink').dataset.step = 'step32'
                break;

        }
        $step.classList.add('active');
        this.typingText($step.querySelector('.game-footer .text'))
    }

    renderStep () {
        fetch(`partials-game/${this.url}.html`)
            .then((response) => response.text())
            .then((responseText) => {
                if (responseText) {
                    const html = new DOMParser().parseFromString(responseText, 'text/html');
                    let step = html.querySelector('.step')
                    this.$steps.append(step)
                    let $step = this.$steps.querySelector('#'+this.url);
                    this.nextStepVisible($step)
                }
            });
    }

    nextStep () {
        this.$container.addEventListener('click', (e) => {
            if (!e.target) return;
            if (e.target.closest('.js-next')) {
                let $btn = e.target.closest('.js-next');
                let step = window.innerWidth < 768 && $btn.dataset.stepMobile ?
                    $btn.dataset.stepMobile :
                    $btn.dataset.step;
                let sum = window.innerWidth < 768 && $btn.dataset.sumMobile ?
                    $btn.dataset.sumMobile:
                    $btn.dataset.sum;
                this.url =  step;
                if (sum) {
                    this.balance.textContent = sum;
                }
                if (this.$steps.querySelector('#'+this.url)) {
                    this.nextStepVisible(this.$steps.querySelector('#'+this.url))
                } else {
                    this.renderStep();
                }

            }

        })
    }

    closeGame () {
        this.$container.addEventListener('click', (e) => {
            if (!e.target) return;
            if (e.target.closest('.js-close-game')) {
                this.$container.classList.remove('active');
                document.querySelector('html').classList.remove('game-open');
                this.steps = this.$steps.querySelectorAll('.step');
                this.firstStepActive();
            }
        })
    }

    openGetSum () {
        this.$container.addEventListener('click', (e) => {
            if (!e.target) return;
            if (e.target.closest('.js-get-sum')) {
                let $getSum = this.$steps.querySelector(e.target.closest('.js-get-sum').dataset.element);
                $getSum.classList.add('active');
                this.closeGetSum();
            }
        })
    }
    closeGetSum () {
        this.$container.querySelector('.get-sum .close').addEventListener('click', (e) => {
            e.target.closest('.step').classList.remove('active');
        })
    }

}
if (document.querySelector('.game-block')) new  gameFolink(document.querySelector('.game-block'));