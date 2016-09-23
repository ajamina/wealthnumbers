var mortgagecalc = new Vue({
    el: '#mortgage',
    data: {

    	
        
    },
    methods: {
        mortgage_pmt: function(){
            if (0 == this.principal) {
                return '$0';
            }
            if (0 == this.years) {
                return '$0';
            }
            if (0 == this.rate) {
                if (!this.years) {
                    return '$0';
                }
                return '$' + this.principal / this.years;
            }
            var months = this.years * 12;
            var adj_rate_1 = this.rate / 200;
            var adj_rate = 1 + adj_rate_1
            var interest_step_1 = Math.pow(adj_rate, 2);
            var interest_multiplier = Math.pow(interest_step_1, 1/12);
            var multiplier = Math.pow(interest_multiplier, months);
            var top = (interest_multiplier - 1) * multiplier;
            var bottom = multiplier - 1;
            var payment = this.principal * (top / bottom);
            if (!payment) {
                return '$0';
            }
            var dollars = (payment).toFixed(2);
            return '$' + dollars;
        }
    }
});