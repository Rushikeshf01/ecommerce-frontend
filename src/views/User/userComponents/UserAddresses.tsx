import { Delete, Edit } from "@mui/icons-material";
import { UserAddressesType } from "../../../types/authTypes";
import { capitalizeFirstLetter } from "../../../utils/jsFunctionsUtils";

const UserAddresses = (props: { userAddresses: UserAddressesType[] }) => {
  const handleEditAddress = () => {};
  const handleDeleteAddress = () => {};

  return (
    <div>
      <hr className="my-2" />
      <div>
        {props.userAddresses.map((item, index) => (
          <div className="user-address-box-main" key={`user-address: ${index}`}>
            <div>
              <p>
                {`${capitalizeFirstLetter(item.address_line1)},`}{" "}
                {`${capitalizeFirstLetter(item.address_line2)}`}
              </p>
              <p>
                {`${capitalizeFirstLetter(item.area)},`}{" "}
                {`${capitalizeFirstLetter(item.city)},`}{" "}
                {`${capitalizeFirstLetter(item.state)},`}{" "}
                {`${capitalizeFirstLetter(item.country)}`} - {item.postal_code}
              </p>
              <p>Mobile Number: {item.mobile}</p>
            </div>
            <div className="ml-5">
              <Edit
                onClick={handleEditAddress}
                className="pointer mr-1 light-green-font"
              />
              <Delete
                onClick={handleDeleteAddress}
                className="pointer ml-1 red-font"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserAddresses;
