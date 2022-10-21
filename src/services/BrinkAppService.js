import { ethers } from 'ethers';
import axios from 'axios'

class BrinkAppService {
  constructor() {
    this.orderList = [];
    this.running = false;
  }

  async start(callback) {
    await this.initalizeOrderList();
    await callback({orders: this.orderList});
  }

  async stop() {
  }

  async initalizeOrderList() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner()
    const ownerSigner = await signer.getAddress()
    console.log("Connected with signer address:", await signer.getAddress());
    const response = await axios.get(`https://app-api.brink.trade/orders?signer=${ownerSigner}`)
    this.orderList = response.data.orders
  }

}

export default BrinkAppService;