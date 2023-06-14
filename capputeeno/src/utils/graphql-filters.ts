import { filterType } from '@/types/filter-types';
import { PriorityTypes } from '@/types/priority-type';

export function getCategoryByType(type: filterType) {
  if (type === filterType.MUG) return 'mugs';
  if (type === filterType.SHIRT) return 't-shirts';
  return '';
}

export function getFieldByPriority(priority: PriorityTypes) {
  if (priority === PriorityTypes.NEWS)
    return { field: 'created_at', order: 'ASC' };
  if (priority === PriorityTypes.BIGGEST_PRICE)
    return { field: 'price_in_cents', order: 'DSC' };
  if (priority === PriorityTypes.MINOR_PRICES)
    return { field: 'price_in_cents', order: 'ASC' };

  return { field: 'sales', order: 'DSC' };
}

export function mountQuery(type: filterType, priority: PriorityTypes) {
  if (type === filterType.ALL && priority === PriorityTypes.POPULARITY) {
    return `
    query{
      allProducts(sortField: "sales", sortOrder: "DSC"){
        id,
        name,
        price_in_cents,
        image_url
      }
    }
    `;
  } else {
    const sortSettings = getFieldByPriority(priority);
    const categoryFilter = getCategoryByType(type);
    return `
    query{
      allProducts(sortField: "${sortSettings.field}", sortOrder:"${
      sortSettings.order
    }", ${categoryFilter ? `filter: {category: "${categoryFilter}"}` : ''}){
        id,
        name,
        price_in_cents,
        image_url
        category
      }
    }
    `;
  }
}
