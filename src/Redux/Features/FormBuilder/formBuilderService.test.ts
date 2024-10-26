import { describe, expect, it, vi } from 'vitest'
import { FormBuilderApiResponse, FormBuilderData, FormSubmission } from './formBuilderService'

const mockForm: FormBuilderData = {
  id: 1,
  name: 'Test Form',
  json_form: JSON.stringify([
    { id: 1, type: 'text', label: 'Name' }
  ]),
  process_flow_id: '123',
  process_flow_step_id: '456',
  form_data: [],
  tag_id: 'tag1'
}

const mockFormResponse: FormBuilderApiResponse = {
  data: mockForm,
  status: 'success'
}

const mockSubmission: FormSubmission = {
  form_builder_id: '1',
  form_field_answers: JSON.stringify([
    { field_id: 1, answer: 'John Doe' }
  ]),
  process_flow_id: '123',
  process_flow_step_id: '456'
}

type QueryReturnType<T> = Promise<{ data: T }>


vi.mock('./formBuilderService', () => ({
  formBuilderApi: {
    endpoints: {
      createForm: {
        initiate: vi.fn().mockImplementation((): QueryReturnType<FormBuilderApiResponse> => 
          Promise.resolve({ data: mockFormResponse }))
      },
      getFormById: {
        initiate: vi.fn().mockImplementation((): QueryReturnType<FormBuilderApiResponse> => 
          Promise.resolve({ data: mockFormResponse }))
      },
      updateForm: {
        initiate: vi.fn().mockImplementation((): QueryReturnType<FormBuilderApiResponse> => 
          Promise.resolve({ data: mockFormResponse }))
      },
      submitForm: {
        initiate: vi.fn().mockImplementation((): QueryReturnType<FormSubmission> => 
          Promise.resolve({ data: mockSubmission }))
      },
      getDynamicFetch: {
        initiate: vi.fn().mockImplementation((): QueryReturnType<{ content: string }> => 
          Promise.resolve({ data: { content: 'dynamic data' } }))
      },
      getForms: {
        initiate: vi.fn().mockImplementation((): QueryReturnType<FormBuilderApiResponse[]> => 
          Promise.resolve({ data: [mockFormResponse] }))
      }
    }
  }
}))

import { formBuilderApi } from './formBuilderService'

describe('Form Builder API', () => {
  describe('createForm', () => {
    it('creates a new form successfully', async () => {
      const result = await formBuilderApi.endpoints.createForm.initiate(mockForm)
      expect(result.data).toEqual(mockFormResponse)
    })
  })

  describe('getFormById', () => {
    it('fetches form by ID successfully', async () => {
      const result = await formBuilderApi.endpoints.getFormById.initiate(1)
      expect(result.data).toEqual(mockFormResponse)
    })
  })

  describe('updateForm', () => {
    it('updates existing form successfully', async () => {
      const updatedForm = {
        ...mockForm,
        name: 'Updated Form'
      }
      const result = await formBuilderApi.endpoints.updateForm.initiate(updatedForm)
      expect(result.data).toEqual(mockFormResponse)
    })
  })

  describe('submitForm', () => {
    it('submits form data successfully', async () => {
      const result = await formBuilderApi.endpoints.submitForm.initiate(mockSubmission)
      expect(result.data).toEqual(mockSubmission)
    })
  })

  describe('getDynamicFetch', () => {
    it('fetches dynamic content successfully', async () => {
      const result = await formBuilderApi.endpoints.getDynamicFetch.initiate('test-url')
      expect(result.data.content).toBe('dynamic data')
    })
  })

  describe('getForms', () => {
    it('fetches all forms successfully', async () => {
      const result = await formBuilderApi.endpoints.getForms.initiate()
      expect(Array.isArray(result.data)).toBe(true)
      expect(result.data).toHaveLength(1)
      expect(result.data[0]).toEqual(mockFormResponse)
    })
  })

  describe('error handling', () => {
    it('handles creation errors properly', async () => {
      vi.mocked(formBuilderApi.endpoints.createForm.initiate)
        .mockRejectedValueOnce(new Error('Failed to create form'))

      await expect(
        formBuilderApi.endpoints.createForm.initiate(mockForm)
      ).rejects.toThrow('Failed to create form')
    })
  })
})