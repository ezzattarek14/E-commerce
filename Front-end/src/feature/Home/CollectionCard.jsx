import StarRating from "../../ui/StarRating";
import { formatCurrency } from "../../utils/helper";
/* eslint-disable react/prop-types */

function CollectionCard({ img, id, title, rating, price }) {
  return (
    <div className="text-start">
      <img src={img} alt={`product img number ${id}`} className="rounded-xl" />
      <h2 className="font-bold text-xl ">{title}</h2>
      <div>
        <StarRating
          maxrating={5}
          size={24}
          key={1234}
          defaultRating={rating}
          text={true}
        />
      </div>
      <div>
        <span className="font-bold text-2xl">{formatCurrency(price)}</span>
      </div>
    </div>
  );
}

export default CollectionCard;
