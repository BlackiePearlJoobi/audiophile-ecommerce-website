import React from "react";
import GoBackButton from "../components/GoBackButton";
import Summary from "../components/Summary";
import PaymentMethod from "../components/PaymentMethod";

const Checkout = () => {
  return (
    <div className="w-full bg-[var(--snow)]">
      <GoBackButton></GoBackButton>
      <main className="mb-[97px] flex flex-col gap-[32px] sm:mb-[116px] lg:mb-[141px] xl:flex-row xl:gap-[32px]">
        <form
          action=""
          method=""
          className="mx-[24px] px-[24px] pt-[24px] pb-[31px] bg-[var(--white)] rounded-[8px] flex flex-col gap-[32px] sm:mx-[40px] sm:px-[27px] sm:py-[30px] sm:gap-[41px] lg:mx-[165px] xl:mr-0 xl:px-[48px] xl:pt-[54px] xl:pb-[48px] xl:flex-5"
        >
          <h1 className="text-[28px] leading-[var(--line-height-bold-28)] tracking-[1px] font-[var(--font-weight-bold)] text-[var(--black)] sm:text-[32px] sm:leading-[var(--line-height-bold-32)] sm:tracking-[var(--letter-spacing-bold-32)]">
            CHECKOUT
          </h1>
          <fieldset>
            <legend className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[0.93px] font-[var(--font-weight-bold)] text-[var(--dark-orange)] mb-[16px]">
              BILLING DETAILS
            </legend>
            <ul className="flex flex-col gap-[24px] sm:flex-row sm:flex-wrap sm:gap-x-[16px]">
              <li className="flex flex-col gap-[9px] sm:w-[calc(50%-8px)]">
                <label
                  htmlFor="name"
                  className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-bold)]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Alexei Ward"
                  required
                  className="w-full h-[56px] px-[24px] border border-solid border-[#cfcfcf] rounded-[8px] text-[14px] tracking-[-0.25px] font-[var(--font-weight-bold)] text-[var(--black)] hover:border-[var(--dark-orange)] focus:border-[var(--dark-orange)] focus:outline-none focus:ring focus:ring-[var(--dark-orange)]"
                ></input>
              </li>
              <li className="flex flex-col gap-[9px] sm:w-[calc(50%-8px)]">
                <label
                  htmlFor="mail"
                  className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-bold)]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="mail"
                  name="email"
                  autoComplete="email"
                  placeholder="alexei@mail.com"
                  required
                  className="w-full h-[56px] px-[24px] border border-solid border-[#cfcfcf] rounded-[8px] text-[14px] tracking-[-0.25px] font-[var(--font-weight-bold)] text-[var(--black)] hover:border-[var(--dark-orange)] focus:border-[var(--dark-orange)] focus:outline-none focus:ring focus:ring-[var(--dark-orange)]"
                ></input>
              </li>
              <li className="flex flex-col gap-[9px] sm:w-[calc(50%-8px)]">
                <label
                  htmlFor="phone"
                  className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-bold)]"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone_number"
                  autoComplete="tel"
                  placeholder="+1(202)555-0136"
                  required
                  className="w-full h-[56px] px-[24px] border border-solid border-[#cfcfcf] rounded-[8px] text-[14px] tracking-[-0.25px] font-[var(--font-weight-bold)] text-[var(--black)] hover:border-[var(--dark-orange)] focus:border-[var(--dark-orange)] focus:outline-none focus:ring focus:ring-[var(--dark-orange)]"
                ></input>
              </li>
            </ul>
          </fieldset>
          <fieldset>
            <legend className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[0.93px] font-[var(--font-weight-bold)] text-[var(--dark-orange)] mb-[16px]">
              SHIPPING INFO
            </legend>
            <ul className="flex flex-col gap-[24px] sm:flex-row sm:flex-wrap sm:gap-x-[16px]">
              <li className="flex flex-col gap-[9px] sm:w-full">
                <label
                  htmlFor="street"
                  className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-bold)]"
                >
                  Your Address
                </label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  autoComplete="street-address"
                  placeholder="1137 Williams Avenue"
                  required
                  className="w-full h-[56px] px-[24px] border border-solid border-[#cfcfcf] rounded-[8px] text-[14px] tracking-[-0.25px] font-[var(--font-weight-bold)] text-[var(--black)] hover:border-[var(--dark-orange)] focus:border-[var(--dark-orange)] focus:outline-none focus:ring focus:ring-[var(--dark-orange)]"
                ></input>
              </li>
              <li className="flex flex-col gap-[9px] sm:w-[calc(50%-8px)]">
                <label
                  htmlFor="apt"
                  className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-bold)]"
                >
                  Apartment / Suite #
                </label>
                <input
                  type="text"
                  id="apt"
                  name="apt"
                  autoComplete="address-line2"
                  placeholder="Apt #404"
                  className="w-full h-[56px] px-[24px] border border-solid border-[#cfcfcf] rounded-[8px] text-[14px] tracking-[-0.25px] font-[var(--font-weight-bold)] text-[var(--black)] hover:border-[var(--dark-orange)] focus:border-[var(--dark-orange)] focus:outline-none focus:ring focus:ring-[var(--dark-orange)]"
                ></input>
              </li>
              <li className="flex flex-col gap-[9px] sm:w-[calc(50%-8px)]">
                <label
                  htmlFor="city"
                  className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-bold)]"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  autoComplete="address-level2"
                  placeholder="New York"
                  required
                  className="w-full h-[56px] px-[24px] border border-solid border-[#cfcfcf] rounded-[8px] text-[14px] tracking-[-0.25px] font-[var(--font-weight-bold)] text-[var(--black)] hover:border-[var(--dark-orange)] focus:border-[var(--dark-orange)] focus:outline-none focus:ring focus:ring-[var(--dark-orange)]"
                ></input>
              </li>
              <li className="flex flex-col gap-[9px] sm:w-[calc(50%-8px)]">
                <label
                  htmlFor="state"
                  className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-bold)]"
                >
                  State / Province
                </label>
                <select
                  id="state"
                  name="state"
                  autoComplete="address-level1"
                  required
                  className="w-full h-[56px] px-[24px] border border-solid border-[#cfcfcf] rounded-[8px] text-[14px] tracking-[-0.25px] font-[var(--font-weight-bold)] text-[var(--black)] hover:border-[var(--dark-orange)] focus:border-[var(--dark-orange)] focus:outline-none focus:ring focus:ring-[var(--dark-orange)]"
                >
                  <option value="">Select a state</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </li>
              <li className="flex flex-col gap-[9px] sm:w-[calc(50%-8px)]">
                <label
                  htmlFor="zip"
                  className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-bold)]"
                >
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  autoComplete="postal-code"
                  placeholder="10001"
                  required
                  className="w-full h-[56px] px-[24px] border border-solid border-[#cfcfcf] rounded-[8px] text-[14px] tracking-[-0.25px] font-[var(--font-weight-bold)] text-[var(--black)] hover:border-[var(--dark-orange)] focus:border-[var(--dark-orange)] focus:outline-none focus:ring focus:ring-[var(--dark-orange)]"
                ></input>
              </li>
            </ul>
          </fieldset>
          <PaymentMethod></PaymentMethod>
        </form>
        <Summary></Summary>
      </main>
    </div>
  );
};

export default Checkout;
