import { CiSearch } from "react-icons/ci";
import { useState } from "react";

import Popup  from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';

import { BsInfoCircleFill } from "react-icons/bs";

import "./index.css";

const Search = (props) => {
  const [searchTxt, sarchFun] = useState("");

  const { fromSearch } = props;

  const btnClicked = () => {
    fromSearch(searchTxt);
  };

  return (
    <div className="parentSearch">
      <div className="inputandSearch">
        <input
          placeholder="Entre City"
          className="inputDiv"
          type="search"
          value={searchTxt}
          onChange={(e) => {
            sarchFun(e.target.value);
          }}
        />

        <button type="button" onClick={btnClicked} className="btnSearch">
          <CiSearch size={30} fill="white" />
        </button>

<div className="popDiv">
<Popup modal  trigger={<button type='button' className="popupCL"> <BsInfoCircleFill fill="white" size={30}/></button>} position="right center" >

{
    close=>(
        <div>
            <dl>
                <dt><h1>Search Box</h1></dt>
                <dd>
                    <ul>
                        <li>
                    In search box you can give any city name and having Clicked on search button you can get data related to that city weather

                        </li>

                    </ul>
                </dd>
<dt>
    <h1>
    Present weather and Broadcast related to wether

    </h1>
</dt>                
<dd>
    <ul>
<li>
Having searched any city you get to see Broad Cast weather for 3 days in right side and in the left side you get present day of weather. 

</li>
    </ul>

</dd>

<dt>
    <h1>
Chart

    </h1>
</dt>
<dd>
    <ul>
        <li>

Related to each city we get to see charts.
        </li>
    </ul>
</dd>
                
            </dl>

            <div>
                <button type="button" onClick={()=>{close()}}>Close</button>
            </div>
        </div>
    )
}

</Popup>
</div>
      </div>
    </div>
  );
};

export default Search;
