import React, {Component} from "react";

export class MovieSorting extends Component{
    render()
    {
        return(
            <div>
                <div className="form-check movie-sorting">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Default checkbox
                        </label>
                </div>
            </div>
        )
    }

}