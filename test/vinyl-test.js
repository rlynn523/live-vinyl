import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
import store from '../src/store';
import { Vinyl } from '../src/components/vinyl';

describe('Vinyl component', function() {
    let vinylRecords = [
        {
            id: '123134',
            title: 'In Rainbows',
            country: 'UK',
            year: '2007',
            thumb: 'www.images.com',
            uri: 'Radiohead',
            format: 'vinyl'
        },
        {
            id: '123',
            title: 'OK Computer',
            country: 'UK',
            year: '1997',
            thumb: 'www.images.com',
            uri: 'Radiohead',
            format: 'vinyl'
        },
    ]
    it('Should Render List Of Vinyl Releases And A Save Vinyl Button', function() {
        let renderer = TestUtils.createRenderer();
        renderer.render(<Vinyl vinylRecords={vinylRecords} />);
        let result = renderer.getRenderOutput();

        let paper = result.props.children.props;
        paper.className.should.equal('paper');

        let vinylTitle = result.props.children.props.children.props;
        vinylTitle.children[0].props.className.should.equal('vinylTitle');
        vinylTitle.children[0].props.children.should.equal('Artist Vinyl Releases');

        let vinylList = vinylTitle.children[1];
        vinylList.type.should.equal('ul');
        vinylList.props.className.should.equal('vinylList');

        let listItem = vinylTitle.children[1].props;
        listItem.children[0].type.should.equal('li');
        listItem.children[0].key.should.equal('123134');
        listItem.children[0].props.children[0].props.href.should.equal('https://www.discogs.com/Radiohead');
        listItem.children[0].props.children[0].props.children.type.should.equal('img');
        listItem.children[0].props.children[0].props.children.props.src.should.equal('www.images.com');
        listItem.children[0].props.children[1].props.children.props.href.should.equal('https://www.discogs.com/Radiohead');
        listItem.children[0].props.children[1].props.children.props.children[0].should.equal('In Rainbows');
        listItem.children[0].props.children[1].props.children.props.children[2].should.equal('UK');
        listItem.children[0].props.children[1].props.children.props.children[4].should.equal('2007');
        listItem.children[0].props.children[1].props.children.props.children[6].should.equal('v');
        listItem.children[1].type.should.equal('li');
        listItem.children[1].key.should.equal('123');
        listItem.children[1].props.children[0].props.href.should.equal('https://www.discogs.com/Radiohead');
        listItem.children[1].props.children[0].props.children.type.should.equal('img');
        listItem.children[1].props.children[0].props.children.props.src.should.equal('www.images.com');
        listItem.children[1].props.children[1].props.children.props.href.should.equal('https://www.discogs.com/Radiohead');
        listItem.children[1].props.children[1].props.children.props.children[0].should.equal('OK Computer');
        listItem.children[1].props.children[1].props.children.props.children[2].should.equal('UK');
        listItem.children[1].props.children[1].props.children.props.children[4].should.equal('1997');
        listItem.children[1].props.children[1].props.children.props.children[6].should.equal('v');

        let saveVinylButton = listItem.children[0].props.children[2].props;
        saveVinylButton.label.should.equal('Save Vinyl');
    });
});
