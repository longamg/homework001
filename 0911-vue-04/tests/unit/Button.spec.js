import { mount } from "@vue/test-utils";
import Button from "../../src/components/Button.vue";
describe("Button", () => {
	// 测试 button slot 显示的内容
	test("slot", () => {
		const wrapper = mount(Button, {
			slots: {
				default: "<div>vue04</div>"
			}
		});
		expect(wrapper.text()).toBe("vue04");
	})

	// 测试 button 点击的时候发出 click 自定义事件
	test("click event", () => {
		const wrapper = mount(Button);
		wrapper.find("[data-testid='btn']").trigger("click");
		expect(wrapper.emitted("click")).toBeTruthy();
	})

	// 测试设置 disabled 属性后，click 事件不能发出
	test("disabled", () => {
		const wrapper = mount(Button, {
			propsData: {
				disabled: true,
			},
		});

		wrapper.find("[data-testid='btn']").trigger("click");
		expect(wrapper.emitted("click")).toBeFalsy();
	});
});
