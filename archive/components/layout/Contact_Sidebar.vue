<template>
    <div class="rounded-lg border border-gray-dark bg-gray-light p-3 sm:grid sm:grid-cols-12 sm:gap-3">
        <div class="sm:col-span-12 md:order-1 md:col-span-6 2xl:col-span-12">
            <div class="mb-3 flex items-center">
                <Icon_Social class="mr-1" />

                <h3 class="mb-0">Social</h3>
            </div>

            <Social_List parentClass="icons-blue" />
        </div>

        <div class="xs-max:mt-3 sm:col-span-12 md:order-3 md:col-span-6 2xl:order-2 2xl:col-span-12">
            <div class="mb-3 flex items-center">
                <Icon_Email class="mr-1" />

                <h3 class="mb-0">Email</h3>
            </div>

            <p class="mb-2">
                General:

                <br class="sm-max:inline-block md:hidden 2xl:inline-block" />

                <a href="mailto:info@smeeple.com">info@smeeple.com</a>
            </p>

            <p class="mb-2">
                Support:

                <br class="md:hidden 2xl:inline-block" />

                <a href="mailto:support@smeeple.com">support@smeeple.com</a>
            </p>

            <p>
                Technical:

                <br class="sm-max:inline-block md:hidden 2xl:inline-block" />

                <a href="mailto:support@smeeple.com">admin@smeeple.com</a>
            </p>
        </div>

        <div class="xs-max:mt-3 sm:col-span-12 md:order-2 md:col-span-6 2xl:order-3 2xl:col-span-12">
            <div class="mb-3 flex items-center">
                <Icon_Phone class="mr-1" />

                <h3 class="mb-0">Phone</h3>
            </div>

            <p>+1 (240) 652-2991</p>
        </div>

        <div class="xs-max:mt-3 sm:col-span-12 md:order-4 md:col-span-6 2xl:col-span-12">
            <div class="mb-3 flex items-center">
                <Icon_Pin class="mr-1" />

                <h3 class="mb-0">Address</h3>
            </div>

            <p>
                Smeeple, Inc.
                <br />
                P.O. Box 17
                <br />
                Great Mills, MD 20634
            </p>
        </div>
    </div>
</template>
