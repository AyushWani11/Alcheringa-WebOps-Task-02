// script.js

document.addEventListener('DOMContentLoaded', function () {
	const table = document.querySelector('.grid-table');
	const rows = table.querySelectorAll('span');

	for (let i = 0; i < rows.length; i += 4) {
		if ((i / 4) % 2 === 0) {
			rows[i].classList.add('row-even');
			rows[i + 1].classList.add('row-even');
			rows[i + 2].classList.add('row-even');
			rows[i + 3].classList.add('row-even');
		} else {
			rows[i].classList.add('row-odd');
			rows[i + 1].classList.add('row-odd');
			rows[i + 2].classList.add('row-odd');
			rows[i + 3].classList.add('row-odd');
		}
	}

	const menu = document.querySelector('#menu-icon');
	const sidebar = document.querySelector('aside');
	const mainPage = document.querySelector('.main');

	menu.addEventListener('click', function () {
		if (sidebar.classList.contains('active')) {
			sidebar.classList.remove('active');
			mainPage.classList.remove('active');
		} else {
			sidebar.classList.add('active');
			mainPage.classList.add('active');
		}
	});

	document.querySelectorAll('.menu-label').forEach((e) => {
		e.addEventListener('click', function () {
			const menuItem = this.parentElement;

			menuItem.classList.toggle('open');
		});
	});

	const modal = document.getElementById('addUserModal');
	const deleteModal = document.getElementById('deleteUserModal');
	const btns = document.querySelectorAll('.addUserBtn');
	const span = document.getElementsByClassName('close')[0];
	const cancel = document.getElementsByClassName('close')[1];
	const updateButtons = document.querySelectorAll('.updateBtn');
	const deleteButtons = document.querySelectorAll('.deleteBtn');
	const form = modal.querySelector('form');
	const delForm = deleteModal.querySelector('form');
	const heading = modal.querySelector('h1');

	updateButtons.forEach((button) => {
		button.addEventListener('click', function () {
			const userId = this.getAttribute('data-id');
			const name = this.getAttribute('data-name');
			const username = this.getAttribute('data-username');
			const email = this.getAttribute('data-email');

			form.querySelector('#id_name').value = name;
			form.querySelector('#id_username').value = username;
			form.querySelector('#id_email').value = email;
			form.querySelector('#id_user_key').value = userId;

			modal.style.display = 'flex';

			heading.textContent = 'Update Member';
		});
	});

	deleteButtons.forEach((button) => {
		button.addEventListener('click', function () {
			const username = this.getAttribute('data-username');
			const userId = this.getAttribute('data-id');
			delForm.querySelector('#id_del_key').value = userId;

			deleteModal.style.display = 'flex';

			const strong = deleteModal.querySelector('strong');
			strong.textContent = username;
		});
	});

	btns.forEach((btn) => {
		btn.addEventListener('click', function () {
			form.reset();
			form.querySelector('#id_user_key').value = '';
			modal.style.display = 'flex';
		});
	});

	span.onclick = function () {
		modal.style.display = 'none';
	};

	cancel.onclick = function () {
		deleteModal.style.display = 'none';
	};

	window.addEventListener('click', function (event) {
		if (modal && event.target === modal) {
			modal.style.display = 'none';
		}
		if (deleteModal && event.target === deleteModal) {
			deleteModal.style.display = 'none';
		}
	});
});
