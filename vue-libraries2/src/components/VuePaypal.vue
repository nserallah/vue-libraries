<template>
  <div class="container">
        <PayPal
            amount="10.00"
            currency="USD"
            :client="credentials"
            :items="myItems"
            
            >
        </PayPal>
  </div>
</template>

<script>
import PayPal from 'vue-paypal-checkout'
//import braintree from 'braintree-web'
export default {
    components: {
        PayPal
    },
    data () {
        return {
            credentials: {
                sandbox: '<sandbox client id>',
                production: '<production client id>'
            },
            myItems: [
                {
                "name": "hat",
                "description": "Brown hat.",
                "quantity": "1",
                "price": "5",
                "currency": "USD"
                },
                {
                "name": "handbag",
                "description": "Black handbag.",
                "quantity": "1",
                "price": "5",
                "currency": "USD"
                }
            ],
            //braintreeSdk: braintree
        }
    }
}
</script>

<style>

</style>