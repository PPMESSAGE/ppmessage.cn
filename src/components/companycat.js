import React from 'react'

import "./companycat.css"

// companies = [{logo: logo_url, name: alt_name, url: company_url, cat: company_cat},]

class CompanyCat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            highlight_item: null
        }
    }

    clickCat(cat, e) {
        console.log("clickCat", cat);
        this.setState({highlight_item: cat.cat_name});
    }

    
    render() {

        let cats = {};
        let i = 0;

        for (i = 0; i < this.props.companies.length; i++) {
            let _company = this.props.companies[i];
            if (cats[_company.cat] === undefined) {
                cats[_company.cat] = {companies:[_company]};
            } else {
                cats[_company.cat].companies.push(_company);
            }
        }

        let _cat_names = Object.keys(cats);

        let cat_list = _cat_names.map((_cat) => {
            return (
                <div onClick={this.clickCat.bind(this, cats[_cat])} key={_cat}>{_cat}</div>
            );
        });

        let _company_list = null;

        let _highlight_item = null;
        if (!this.state.highlight_item) {
            this.setState({highlight_item: this.props.companies[0].cat});
            _highlight_item = this.props.companies[0].cat;
        } else {
            _highlight_item = this.state.highlight_item;
        }
        _company_list = cats[_highlight_item].companies;

        let cat_companies = _company_list.map((_company) => {
            return (
                <div>
                    <img src={_company.logo} href={_company.url} alt={_company.name} />
                </div>
            );
        });
        return (
            <div className="company-cat">
                <div className="company-cat-left">
                    <div>
                        {cat_list}
                    </div>
                </div>
                <div className="company-cat-right">
                    {cat_companies}
                </div>
            </div>
        )
    }
}

export default CompanyCat
