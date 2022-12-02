import React from "react";
import Multiselect from 'multiselect-react-dropdown';

function Ingredients() {  
    return (
        <div>
            <Multiselect
                text
                displayValue="key"
                groupBy="cat"
                onKeyPressFn={function noRefCheck(){}}
                onRemove={function noRefCheck(){}}
                onSearch={function noRefCheck(){}}
                onSelect={function noRefCheck(){}}
                placeholder="Choose Ingredients"
                showCheckbox
                options={[
                    {
                    cat: 'Grains',
                    key: 'Rice'
                    },
                    {
                    cat: 'Grains',
                    key: 'Tortilla'
                    },
                    {
                    cat: 'Grains',
                    key: 'Oats'
                    },
                    {
                    cat: 'Protein',
                    key: 'Chicken'
                    },
                    {
                    cat: 'Protein',
                    key: 'Egg'
                    },
                    {
                    cat: 'Protein',
                    key: 'Beef'
                    },
                    {
                    cat: 'Diary',
                    key: 'Milk'
                    },
                    {
                    cat: 'Diary',
                    key: 'Cream'
                    }
                ]}
                style={{
                    chips: {
                      background: 'skyblue',
                      color: 'black'
                    },
                    multiselectContainer: {
                      color: 'black'
                    },
                    searchBox: {
                      border: '1px solid white',
                      'border-radius': '5px'
                    }
                  }}
        />
        </div>
    );
}
export default Ingredients;