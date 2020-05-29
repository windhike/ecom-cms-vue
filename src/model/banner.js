import { _delete, post, get, put, patch } from '../lin/plugin/axios'

class Banner {
  handleError

  async getBanners() {
    const res = await get('v1/banner')
    return res
  }

  async delBannerByIds(ids) {
    // { ids } 等价于 { ids : ids }，对象的key和value命名相同时的一种简写
    const res = await _delete('v1/banner', { ids }, { handleError: this.handleError })
    return res
  }

  async createBanner(data) {
    const res = await post('v1/banner', { ...data }, { handleError: this.handleError })
    return res
  }

  /**
   * 编辑轮播图信息
   */
  async editBanner(id, name, description) {
    const res = await patch(
      `v1/banner/${id}`,
      {
        name,
        description,
      },
      { handleError: this.handleError },
    )
    return res
  }

  /**
   * 新增轮播图元素
   */
  async addBannerItems(items) {
    const res = await post('v1/banner/item', { items }, { handleError: this.handleError })
    return res
  }

  /**
   * 删除轮播图元素
   */
  async delBannerItems(ids) {
    const res = await _delete('v1/banner/item', { ids }, { handleError: this.handleError })
    return res
  }

  /**
   * 编辑轮播图元素
   */
  async editBannerItems(items) {
    const res = await put('v1/banner/item', { items }, { handleError: this.handleError })
    return res
  }
}

export default new Banner()
