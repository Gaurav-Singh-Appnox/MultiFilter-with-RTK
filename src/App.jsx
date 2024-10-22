import { useSelector, useDispatch } from "react-redux";
import {
  setBrand,
  setColor,
  setStorage,
  applyFilters,
} from "./store/filterSlice";


function App() {
  const data = useSelector((state) => state.filterSlice.data);
  const dispatch = useDispatch();
  const handleBrandChange = (e) => {
    dispatch(setBrand(e.target.value));
    dispatch(applyFilters());
  };
  const handleColorChange = (e) => {
    dispatch(setColor(e.target.value));
    dispatch(applyFilters());
  };
  const handleStorageChange = (e) => {
    dispatch(setStorage(e.target.value));
    dispatch(applyFilters());
  };
  return (
    <div className="flex w-[90vw] mx-auto gap-10 mt-12">
      <div className="w-[20%] bg-red-100 h-[400px] flex flex-col gap-4 p-4">
        <label htmlFor="brandSelect">Select Brand:</label>
        <select id="brandSelect" onChange={handleBrandChange}>
          <option value="" disabled selected>
            Select a brand
          </option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Google">Google</option>
          <option value="OnePlus">OnePlus</option>
          <option value="Xiaomi">Xiaomi</option>
          <option value="Sony">Sony</option>
          <option value="Nokia">Nokia</option>
          <option value="Oppo">Oppo</option>
          <option value="Huawei">Huawei</option>
          <option value="Motorola">Motorola</option>
        </select>
        <label htmlFor="colorSelect">Select Color:</label>
        <select id="colorSelect" onChange={handleColorChange}>
          <option value="" disabled selected>
            Select a color
          </option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Black">Black</option>
          <option value="Yellow">Yellow</option>
        </select>
        <label htmlFor="storageSelect">Select Storage:</label>
        <select id="storage" onChange={handleStorageChange}>
          <option value="" disabled selected>
            Select Storage
          </option>
          <option value="128GB">128GB</option>
          <option value="256GB">256GB</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-8 w-[80%]">
        {data.length === 0 ? (
          <h1>No product found</h1>
        ) : (
          data.map((item) => (
            <div
              className="w-64 max-w-[420px] min-h-[150px] bg-slate-300 p-4"
              key={item.id}
            >
              <p>{item.brand}</p>
              <p>{item.model}</p>
              <p>{item.price}</p>
              <p>{item.color}</p>
              <p>{item.storage}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default App;