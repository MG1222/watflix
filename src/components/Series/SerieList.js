import React from 'react';
import { useSelector } from "react-redux";
import { getAllSeries } from "../../store/series/serieSlice";

const SerieList = () => {
    const series = useSelector(getAllSeries);
    return (
        <div>
            <h1>Series List</h1>
        </div>
    );
};

export default SerieList;