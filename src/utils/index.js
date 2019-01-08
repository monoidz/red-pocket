const contractAddress = 'TE6TkZr7aSkrbECUEAzpj3zTGT7W7AwshB'

const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },

};

export default utils;