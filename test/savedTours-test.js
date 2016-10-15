import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
import store from '../src/store';
import { SavedTours } from '../src/components/savedTours';

describe('Saved Tours component', function() {
    let savedTours = {
        tour: [
            {
                _id: '123134',
                title: 'radiohead @ mr.smalls',
                date: '10-10-16'
            },
            {
                _id: '123',
                title: 'red fang @ mr.smalls',
                date: '10-11-16'
            },
        ]
    }
    it('Should Render List of Saved Tour Dates and Delete Button', function() {
        let renderer = TestUtils.createRenderer();
        renderer.render(<SavedTours savedTours={savedTours} />);
        let result = renderer.getRenderOutput();

        let paper = result.props.children.props;
        paper.className.should.equal('paperSaved');

        let savedTourTitle = paper.children.props;
        savedTourTitle.children[0].type.should.equal('p');
        savedTourTitle.children[0].props.className.should.equal('savedToursTitle');
        savedTourTitle.children[0].props.children.should.equal('Saved Tour Dates');
        savedTourTitle.children[1].type.should.equal('ul');
        savedTourTitle.children[1].props.className.should.equal('savedToursList');

        let listItem = savedTourTitle.children[1].props;
        listItem.children[0].type.should.equal('li');
        listItem.children[0].key.should.equal('123134');
        listItem.children[0].props.children[0].props.children[0].should.equal('radiohead @ mr.smalls');
        listItem.children[0].props.children[0].props.children[2].should.equal('10-10-16');
        listItem.children[1].type.should.equal('li');
        listItem.children[1].key.should.equal('123');
        listItem.children[1].props.children[0].props.children[0].should.equal('red fang @ mr.smalls');
        listItem.children[1].props.children[0].props.children[2].should.equal('10-11-16');

        let deleteButton = listItem.children[0].props.children[1];
        deleteButton.props.className.should.equal('deleteButton');
        deleteButton.props.label.should.equal('Delete Tour Date');
    });
});
