import { Test, TestingModule } from '@nestjs/testing';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';

describe('CountryController', () => {
  let countryController: CountryController;
  let countryService: CountryService;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CountryController],
      providers: [CountryService],
    }).compile();

    countryService = app.get<CountryService>(CountryService);
    countryController = app.get<CountryController>(CountryController);
  });

  describe('getCountry', () => {
    it('should return "Hello World!"', async () => {
      const result = [
        { _id: '62b19440ddbbb300034890ef', title: 'iran' },
        { _id: '62b19994e6fe5bba973036f1', title: 'asia' },
      ];
      // jest.spyOn(countryService, 'getAll').mockImplementation(() => result);
      expect(await countryService.getAll()).toBe(result);
      // const countries = await countryController.getAllCountry();
      // expect(countries).toBe(countries);
    });
  });

  it('should return null', async () => {
    // const countries = await countryController.getAllCountry();
    // expect(countries).toBeNull();
  });
});
