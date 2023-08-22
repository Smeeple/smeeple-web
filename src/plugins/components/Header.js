export default {
    data() {
        return {
            isHeaderBgBlue: false,
            isMobileNavOpen: false,
        };
    },
    methods: {
        checkHeaderBgBlue() {
            this.isHeaderBgBlue = document.querySelector('header').classList.contains('bg-blue');
        },
        toggleMobileNav() {
            this.isMobileNavOpen = !this.isMobileNavOpen;

            if (this.isMobileNavOpen) {
                document.body.classList.add('overflow-hidden');
            } else {
                document.body.classList.remove('overflow-hidden');
            }
        },
    },
    mounted() {
        // isHeaderBgBlue
        this.checkHeaderBgBlue();

        new MutationObserver(this.checkHeaderBgBlue).observe(document.querySelector('header'), {
            attributeFilter: ['class'],
            attributes: true,
        });

        // isMobileNavOpen
        if (!this.isMobileNavOpen) {
            document.body.classList.remove('overflow-hidden');
        }
    },
    props: {
        parentClass: String,
    },
};
