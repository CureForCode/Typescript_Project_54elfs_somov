// 1) Интерфейс описывает типы данных объекта.
export interface Car {
  brand: string;      // string
  price: number;      // number
  isDiesel: boolean;  // boolean
  note?: string;      // optional свойство (просто так для тренировки)
}