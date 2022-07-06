import { Test, TestingModule } from '@nestjs/testing';
import { CityController } from './city.controller';
import { CityService } from './city.service';

describe('CityController', () => {
  let cityController: CityController;
  let cityService: CityService;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CityController],
      providers: [CityService],
    }).compile();

    cityService = app.get<CityService>(CityService);
    cityController = app.get<CityController>(CityController);
  });

  describe('getAllCity', () => {
    it('should return "Hello World!"', async () => {
      const result = [
        { _id: '62b19440ddbbb300034890ef', title: 'iran' },
        { _id: '62b19994e6fe5bba973036f1', title: 'asia' },
      ];
      // jest.spyOn(cityService, 'getAll').mockImplementation(() => result);
      expect(await cityService.getAll()).toBe(result);
      // const countries = await cityController.getAllCity();
      // expect(countries).toBe(countries);
    });
  });

  it('should return null', async () => {
    // const countries = await cityController.getAllCity();
    // expect(countries).toBeNull();
  });
});
