var isMomHappy = false;

var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        }else {
            var reason = new Error('mom is not happy');
            reject(reason);
        }
    }
    );
