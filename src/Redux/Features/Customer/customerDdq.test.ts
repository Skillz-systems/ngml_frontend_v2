import { describe, expect, it, vi } from 'vitest'
import { CustomerData, CustomerResponse, customersApi } from './customerService'

const mockCustomerData: CustomerData = {
  id: 1,
  task_id: 'task123',
  company_name: 'Test Company',
  email: 'test@example.com',
  phone_number: '1234567890',
  created_by_user_id: 'user123',
  status: true,
  created_at: '2023-01-01T00:00:00Z',
  updated_at: '2023-01-01T00:00:00Z'
}

const mockCustomerResponse: CustomerResponse = {
  data: [mockCustomerData]
}

type QueryReturnType<T> = Promise<{ data: T }>

vi.mock('./customerService', () => ({
  customersApi: {
    endpoints: {
      getCustomersDDQ: {
        initiate: vi.fn().mockImplementation((): QueryReturnType<CustomerResponse> => 
          Promise.resolve({ data: mockCustomerResponse }))
      },
      getACustomerDDQById: {
        initiate: vi.fn().mockImplementation((id: number): QueryReturnType<CustomerData> => 
          Promise.resolve({ data: mockCustomerData }))
      },
      deleteCustomerDDQ: {
        initiate: vi.fn().mockImplementation((id: number): QueryReturnType<{ success: boolean; id: number }> => 
          Promise.resolve({ data: { success: true, id } }))
      }
    }
  }
}))

describe('customersApi endpoints', () => {
  it('should fetch customers DDQ successfully', async () => {
    const result = await customersApi.endpoints.getCustomersDDQ.initiate()
    expect(result.data).toEqual(mockCustomerResponse)
  })

  it('should fetch a customer DDQ by ID successfully', async () => {
    const result = await customersApi.endpoints.getACustomerDDQById.initiate(1)
    expect(result.data).toEqual(mockCustomerData)
  })

  it('should delete a customer DDQ successfully', async () => {
    const result = await customersApi.endpoints.deleteCustomerDDQ.initiate(1)
    expect(result.data).toEqual({ success: true, id: 1 })
  })
})