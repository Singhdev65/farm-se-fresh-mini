import { useCart } from "../../context/cart.context";
import Button from "../btn";

export default function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center gap-4 p-4 bg-white shadow rounded-lg">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 rounded object-cover"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-600">
          ₹{item.price}/{item.unit}
        </p>
        <div className="mt-2 flex items-center gap-2">
          <Button
            label={"-"}
            classname="px-3 py-1 bg-gray-200 rounded"
            handleClick={() => updateQuantity(item._id, -1)}
          />
          <span>{item.quantity}</span>
          <Button
            label={"+"}
            classname="px-3 py-1 bg-gray-200 rounded"
            handleClick={() => updateQuantity(item._id, 1)}
          />
        </div>
      </div>
      <Button
        label={"Remove"}
        classname="text-red-500 hover:underline"
        handleClick={() => removeItem(item._id)}
      />
    </div>
  );
}
