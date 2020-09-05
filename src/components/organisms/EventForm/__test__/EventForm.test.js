import React from 'react'
import { shallow, mount } from 'enzyme'
import { ProviderMock, mockStore } from '../../../../../__mocks__/providerMock'
import { EventForm } from '../EventForm'
import { SubmitSection } from '../EventForm.styles'
import { FormField } from '../../../molecules'
import { Button } from '../../../atoms'
import { serializeEventFormData } from '../helper'

const mockEventFormData = {
  EventFormName: 'Event name',
  EventFormInitialDate: '2020-09-04',
  EventFormEndDate: '2020-09-06'
}

const mockSerializerResponse = {
  name: 'Event name',
  initDate: new Date('2020-09-04').toISOString(),
  endDate: new Date('2020-09-06').toISOString()
}

describe('EventForm Organism', () => {
  describe('render', () => {
    const component = shallow(
      <ProviderMock>
        <EventForm />
      </ProviderMock>
    )
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
  describe('To have props', () => {
    const component = mount(
      <ProviderMock>
        <EventForm />
      </ProviderMock>
    )
    it('Is epected to have 2 Button', () => {
      expect(component.find(Button).length).toBe(2)
    })
    it('Is epected to have title text', () => {
      expect(component.find('h2').text()).toBe('Event')
    })
    it('Is epected to have 3 FormField', () => {
      expect(component.find(FormField).length).toBe(3)
    })
  })
  describe('Handle close modal', () => {
    mockStore.dispatch = jest.fn()
    const component = mount(
      <ProviderMock>
        <EventForm />
      </ProviderMock>
    )
    test('run handleCloseModal', () => {
      component.find(SubmitSection).find(Button).at(0).simulate('click')
      expect(mockStore.dispatch).toHaveBeenCalled()
    })
  })
})

describe('helpers', () => {
  describe('serializeEventFormData', () => {
    describe('When receive event form data', () => {
      it('should return event data serialized', () => {
        expect(serializeEventFormData(mockEventFormData)).toEqual(
          mockSerializerResponse
        )
      })
    })
  })
})
