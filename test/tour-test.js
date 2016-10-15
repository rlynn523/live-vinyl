import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
import store from '../src/store';
import { Tour } from '../src/components/tour';

describe('Tour component', function() {
    let artistTourDates = {
        tour: [
            {
                id: '123134',
                title: 'radiohead @ mr. smalls',
                ticket_type: 'tickets',
                ticket_url: 'www.tickets.com',
                ticket_status: 'available',
                formatted_datetime: 'Saturday, October 15, 2016'
            },
            {
                id: '123',
                title: 'red fang @ mr. smalls',
                ticket_type: 'tickets',
                ticket_url: 'www.tickets.com',
                ticket_status: 'available',
                formatted_datetime: 'Sunday, October 16, 2016'
            },
        ]
    }
    it('Should Render List Of Current Tour Dates With A Save Tour Button', function() {
        let renderer = TestUtils.createRenderer();
        renderer.render(<Tour artistTourDates={artistTourDates} />);
        let result = renderer.getRenderOutput();

        let paper = result.props.children.props;
        paper.className.should.equal('paper');

        let tourTitle = result.props.children.props.children.props;
        tourTitle.children[0].props.className.should.equal('tourTitle');
        tourTitle.children[0].props.children.should.equal('Tour Dates');

        let tourList = tourTitle.children[1];
        tourList.type.should.equal('ul');
        tourList.props.className.should.equal('tourList');

        let listItem = tourList.props;
        listItem.children[0].type.should.equal('li');
        listItem.children[0].key.should.equal('123134');
        listItem.children[0].props.children[0].should.equal('radiohead @ mr. smalls');
        listItem.children[0].props.children[4].should.equal('Saturday, October 15, 2016');
        listItem.children[0].props.children[6].props.children[0].should.equal('tickets');
        listItem.children[0].props.children[6].props.children[2].props.href.should.equal('www.tickets.com');
        listItem.children[0].props.children[6].props.children[2].props.children.should.equal('available');

        listItem.children[1].type.should.equal('li');
        listItem.children[1].key.should.equal('123');
        listItem.children[1].props.children[0].should.equal('red fang @ mr. smalls');
        listItem.children[1].props.children[4].should.equal('Sunday, October 16, 2016');
        listItem.children[1].props.children[6].props.children[0].should.equal('tickets');
        listItem.children[1].props.children[6].props.children[2].props.href.should.equal('www.tickets.com');
        listItem.children[1].props.children[6].props.children[2].props.children.should.equal('available');

        let saveTourButton = listItem.children[0].props.children[7];
        saveTourButton.props.className.should.equal('tourButton');
        saveTourButton.props.label.should.equal('Save Tour Date');
    });
});
