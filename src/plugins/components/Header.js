export default {
    data() {
        return {
            isHeaderFixed: false,
            isMobileNavOpen: false,
        };
    },
    methods: {
        checkHeaderFixed() {
            this.isHeaderFixed = document.querySelector('header').classList.contains('bg-blue');
        },
        toggleMobileNav() {
            this.isMobileNavOpen = !this.isMobileNavOpen;

            if (this.isMobileNavOpen) {
                document.body.classList.add('overflow-hidden');
            } else {
                document.body.classList.remove('overflow-hidden');
            }
        },

        closeMobileNav() {
            this.isMobileNavOpen = false;
            document.body.classList.remove('overflow-hidden');
        },
    },
    mounted() {
        // isHeaderFixed
        this.checkHeaderFixed();

        new MutationObserver(this.checkHeaderFixed).observe(document.querySelector('header'), {
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
