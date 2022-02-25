import httpInstance from './httpInstance'

export default {
  getItems() {
    return httpInstance.get('items')
  },
  getItem(item) {
    return httpInstance.get('items/'+item)
  },
  createItem(name,
  discount,
  base_price,
  final_price,
  manufacturing_country){
    return httpInstance.post('items/', {
      "name": name,
      "discount": discount,
      "base_price": base_price,
      "final_price": final_price,
      "manufacturing_country": manufacturing_country
    })
  },
  deleteItem(item){
    return httpInstance.delete('items/'+item)
  }
}