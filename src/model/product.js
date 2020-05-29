import { get } from '../lin/plugin/axios'

class Product {
  /**
   * 获取所有商品，不分页
   * @returns {Promise<*>}
   */
  async getProducts() {
    const res = await get('v1/product')
    return res
  }
}

export default new Product()
