import "./styles.css";
import { v4 as uuidv4 } from "uuid";

// 1) Интерфейс описывает типы данных объекта.
interface Car {
  brand: string;      // string
  price: number;      // number
  isDiesel: boolean;  // boolean
  note?: string;      // optional свойство (просто так для тренировки)
}

// 2) Типизированный массив объектов Car[].
const cars: Car[] = [
  { brand: "BMW",      price: 20000, isDiesel: true,  note: "Most Budget" },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe",   price: 50000, isDiesel: true },
  { brand: "Nissan",   price: 25000, isDiesel: false, note: "Most Popular" },
  { brand: "Audi",     price: 50000, isDiesel: true },
];

// 3) Новый интерфейс, расширяющий интерфейс Car.
// Он позволяет явно типизировать массив с id, так как uuid генерирует только string значения.
interface CarPlusId extends Car {
  id: string;
}

// 4) Генерация массива с id с помощью uuidv4, map и типизацей как CarPlusId[].
// Массив с id генерируется один раз, чтобы избежать пересоздания при каждом рендере
const carsPlusId: CarPlusId[] = cars.map((car) => ({ ...car, id: uuidv4() }));

function Homework_06() {
  // 5) Создание списка карточек через map.
  const cards = carsPlusId.map((car) => (
    <div className="car_card" key={car.id}>
      <h3 className="car_brand">{car.brand}</h3>
      <p className="car_price">Price: {car.price}</p>
      <p className="car_fuel">Fuel: {car.isDiesel ? "Diesel" : "Petrol"}</p>
      {car.note && <p className="car_note">Note: {car.note}</p>}
    </div>
  ));

  return (
    <div className="homework06_wrapper">
      <h2 className="title">Cars</h2>
      <div className="cars_list">{cards}</div>
    </div>
  );
}

export default Homework_06;
