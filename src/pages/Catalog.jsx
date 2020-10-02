import React, { useState, useEffect } from 'react';
import CatalogLayout from 'components/catalog/CatalogLayout';
import FilterSidebar from 'components/catalog/FilterSidebar';
import ItemGrid from 'components/catalog/ItemGrid';
import ResultBar from 'components/catalog/ResultBar';
import InputGroup from 'components/catalog/InputGroup';
import { connect } from 'react-redux';
import { selectItemsInPriceRange } from 'store/selectors';

// masyvas filtracijos tipai
const filterTypes = [
    {
        id: 1,
        name: "Brands",
        //  curry methodology - function return function, naudojama perduoti papildomiem parametram
        filterFunction: types => {
            // Funkcija kuris bus naudojama arr.filter(... cia....), turi grazint true arba false
            return  function (item) { 
                const title = item.title;
                for (let i = 0; i < types.length; i++) {
                    const { name, show } = types[i];
                    if ( !show && title.includes(name)) return false;
                }
                return true;
            }
        },
        types: [
            {
                name: 'Fender',
                show: true
            },
            {
                name: 'Gibson',
                show: true
            },
            {
                name: 'Ibanez',
                show: true
            },
            {
                name: 'Tamsta',
                show: true
            },
            {
                name: 'Epiphone',
                show: true
            },
            {
                name: 'Behringer',
                show: true
            },
            {
                name: 'Cort',
                show: true
            },
            {
                name: 'Godin',
                show: true
            },
            {
                name: 'Hohner',
                show: true
            },
            {
                name: 'Jackson',
                show: true
            },
            {
                name: 'Music Man',
                show: true
            },
            {
                name: 'Schecter',
                show: true
            },
            {
                name: 'Squier',
                show: true
            },
            {
                name: 'Tokai',
                show: true
            },
            {
                name: 'Zemaitis',
                show: true
            },
            {
                name: 'Washburn',
                show: true
            },
            {
                name: 'Stagg',
                show: true
            },
            {
                name: 'VOX',
                show: true
            }
        ]
    },
    {
        id: 2,
        name: "Type",
        filterFunction: types => {
            return  function (item) { 
                const type = item.type;
                for (let i = 0; i < types.length; i++) {
                    const { name, show } = types[i];
                    console.log(name);
                    if ( !show && type === name) return false;
                }
                return true;
            }
        },
        types: [
            {
                name: 'electric',
                show: true
            },
            {
                name: 'bass',
                show: true
            },
            {
                name: 'acoustic',
                show: true
            },
            {
                name: 'classical',
                show: true
            },
            {
                name: 'electro-acoustic',
                show: true
            },
            {
                name: 'twelve-string',
                show: true
            }
        ]
    }
];

const sortFunction = {
    'a-z': (a, b) => a.title.localeCompare(b.title) * (-1),
    'z-a': (a, b) => a.title.localeCompare(b.title),
    'low-to-high': (a, b) => b.price - a.price,
    'high-to-low': (a, b) => a.price - b.price,
    'rating': (a, b) => a.rating - b.rating,
}

const Catalog = ({initItems}) => {
    const [filters, setFilters] = useState(filterTypes);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5000);
    const [filteredItems, setFilteredItems] = useState(initItems);
    const [sortOrder, setSortOrder] = useState('a-z');

    const handleFilterChange = (typeId, title) => {
        setFilters(
            filters.map(filterType => ({
                ...filterType,
                types: filterType.types.map(({ name, show }) => ({
                    name,
                    show: typeId === filterType.id && name === title ? !show : show
                }))
            }))
        )
    }

    useEffect(() => {
        // Filtering
        let items = initItems.filter(({ price }) => price >= minValue && price <= maxValue)
        // Multi filtering
        filters.forEach(filter => {
            items = items.filter(filter.filterFunction(filter.types));
        });
        setFilteredItems(items);
    }, [filters, minValue, maxValue])
    
    // Sorting
    useEffect(() => {
        setFilteredItems(filteredItems.sort(sortFunction[sortOrder]));
    }, [sortOrder]);


    // is filtracijos masyvo atfiltruoja vertes ir generuoja inputGroupa su kiekvienu elementu
    const filterList = filters.map((filterType) => {
        const mapArrays = filterType.types.map(({ name, show }) =>
            <InputGroup
                key={name}
                title={name}
                type="checkbox"
                initValue={show}
                onChange={(title) => handleFilterChange(filterType.id, title)}
            />
        );

        return (
            <div className="input-name">
                <h3>{filterType.name}</h3>
                {mapArrays}
            </div>
        );
    })

    return (
        <CatalogLayout>
            <ResultBar count={filteredItems.length} sortOrder={sortOrder} onSortOrderChange={setSortOrder} />
            <FilterSidebar>
                <InputGroup key='min' title="Min Price" type="text" initValue={minValue} onChange={setMinValue} />
                <InputGroup key='max' title="Max Price" type="text" initValue={maxValue} onChange={setMaxValue} />
                {filterList}
            </FilterSidebar>
            <ItemGrid items={filteredItems} />
        </CatalogLayout>
    )
};

const mapStateToProps = (state) => ({
    initItems: state.catalog.items,
    filteredItems: (min, max) => selectItemsInPriceRange(state, min, max)
});

export default connect(mapStateToProps)(Catalog);
