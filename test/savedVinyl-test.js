import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
import store from '../src/store';
import { SavedVinyl } from '../src/components/savedVinyl';

describe('Saved Tours component', function() {
    let savedVinyls = {
        vinyl: [
            {
                _id: '123134',
                title: 'OK Computer',
                year: '1997',
                country: 'UK'
            },
            {
                _id: '123',
                title: 'In Rainbows',
                year: '2007',
                country: 'UK'
            },
        ]
    }
    it('Should Render List of Saved Vinyl and Delete Button', function() {
        let renderer = TestUtils.createRenderer();
        renderer.render(<SavedVinyl savedVinyls={savedVinyls} />);
        let result = renderer.getRenderOutput();

        let paper = result.props.children.props;
        paper.className.should.equal('paperSaved');

        let savedVinylTitle = paper.children.props.children[0];
        savedVinylTitle.props.className.should.equal('savedVinylTitle');
        savedVinylTitle.props.children.should.equal('Records In Your Collection');

        let vinylList = paper.children.props.children[1];
        vinylList.type.should.equal('ul');
        vinylList.props.className.should.equal('savedVinylList');

        let listItem = vinylList.props;
        listItem.children[0].type.should.equal('li');
        listItem.children[0].key.should.equal('123134');
        listItem.children[0].props.children[0].props.children[0].should.equal('OK Computer');
        listItem.children[0].props.children[0].props.children[2].should.equal('UK');
        listItem.children[0].props.children[0].props.children[4].should.equal('1997');
        listItem.children[1].type.should.equal('li');
        listItem.children[1].key.should.equal('123');
        listItem.children[1].props.children[0].props.children[0].should.equal('In Rainbows');
        listItem.children[1].props.children[0].props.children[2].should.equal('UK');
        listItem.children[1].props.children[0].props.children[4].should.equal('2007');

        let deleteButton = listItem.children[0].props.children[1].props;
        deleteButton.className.should.equal('deleteButton');
        deleteButton.label.should.equal('Delete Vinyl');
    });
});
