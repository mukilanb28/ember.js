import EmberObject from '@ember/object';
import HistoryLocation from '@ember/routing/history-location';
import { ILocation } from '@ember/routing/location';
import { expectTypeOf } from 'expect-type';

// This doesn't have any public API

let location = new HistoryLocation();
expectTypeOf(location).toMatchTypeOf<EmberObject>();
expectTypeOf(location).toMatchTypeOf<ILocation>();
