import React, { Component } from "react";

export const IntegerInput = props => (
    <div className="form-group row">
        <label htmlFor={props.id} className="col-sm-2 col-form-label">
            {props.label}
        </label>
        <div className="col-sm-3">
            <input
                type="number"
                className="form-control was-validated"
                id={props.id}
                placeholder="0"
                size="2"
                maxLength="2"
                value={props.value}
                min={props.min}
                max={props.max}
                required
                onChange={e => {
                    props.onChange(e.target.value);
                }}
            />
        </div>
    </div>
);
