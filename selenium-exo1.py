from selenium import webdriver
from selenium.webdriver import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.service import Service
import time


class Selenium:

    def initialisation(self):
        firefox_service = Service(r"./geckodriver")
        self.driver = webdriver.Firefox(service=firefox_service)

    def siteWeb(self):
        self.driver.get("http://127.0.0.1:4200")

    def loginAdmin(self):
        bouton_login = self.driver.find_element(By.CSS_SELECTOR, '.mat-toolbar > a:nth-child(3) > span:nth-child(1)')
        bouton_login.click()

        txt_email = self.driver.find_element(By.CSS_SELECTOR, '#mat-input-0')
        txt_email.send_keys("benoit.prigent@domain.fr")

        txt_password = self.driver.find_element(By.CSS_SELECTOR, '#mat-input-1')
        txt_password.send_keys("LaNoixDeCocoEstUnFruit")

        bouton_connexion = self.driver.find_element(By.CSS_SELECTOR, '.mdc-button__label')
        bouton_connexion.click()

        time.sleep(2)

    def modifProfil(self):
        bouton_profil = self.driver.find_element(By.CSS_SELECTOR, '.mat-toolbar > a:nth-child(4) > span:nth-child(1)')
        bouton_profil.click()

        time.sleep(1)

        bouton_modif_profil = self.driver.find_element(By.LINK_TEXT, 'Modifier votre profil')
        self.driver.execute_script("arguments[0].click();", bouton_modif_profil)

        txt_nom = self.driver.find_element(By.CSS_SELECTOR, '#mat-input-2')
        txt_nom.click()
        txt_nom.clear()
        txt_nom.send_keys("Silvert")

        bouton_enregistrer = self.driver.find_element(By.CSS_SELECTOR, '.mdc-button__label')
        self.driver.execute_script("arguments[0].click();", bouton_enregistrer)

        time.sleep(1)

    def modifEvenement(self):
        bouton_evenement = self.driver.find_element(By.CSS_SELECTOR, '.mat-toolbar > a:nth-child(5) > span:nth-child(1)')
        bouton_evenement.click()

        time.sleep(1)

        bouton_un_evenement = self.driver.find_element(By.CSS_SELECTOR, 'tr.mat-mdc-row:nth-child(1) > td:nth-child(1) > a:nth-child(1)')
        bouton_un_evenement.click()

        time.sleep(2)

        bouton_modif_evenement = self.driver.find_element(By.XPATH, '/html/body/app-root/div/div/app-detail-evenement/div[2]/table/tbody/tr/td/div/button')
        bouton_modif_evenement.click()

        txt_nom = self.driver.find_element(By.CSS_SELECTOR, '#mat-input-7')
        txt_nom.click()
        txt_nom.clear()
        txt_nom.send_keys("Evenement-1")

        bouton_enregistrer = self.driver.find_element(By.CSS_SELECTOR, '.mdc-button__label')
        bouton_enregistrer.click()

    # def suppEvenement(self):
    #     bouton_evenement = self.driver.find_element(By.CSS_SELECTOR, '.mat-toolbar > a:nth-child(5) > span:nth-child(1)')
    #     bouton_evenement.click()
    #
    #     time.sleep(1)
    #
    #     bouton_un_evenement = self.driver.find_element(By.CSS_SELECTOR, 'tr.mat-mdc-row:nth-child(1) > td:nth-child(1) > a:nth-child(1)')
    #     bouton_un_evenement.click()
    #
    #     bouton_supp_evenement = self.driver.find_element(By.CSS_SELECTOR, 'app-detail-evenement.ng-star-inserted > div:nth-child(7) > div:nth-child(2) > button:nth-child(1)')
    #     bouton_supp_evenement.click()

    def modifClient(self):
        bouton_clients = self.driver.find_element(By.CSS_SELECTOR, '.mat-toolbar > a:nth-child(6) > span:nth-child(1)')
        bouton_clients.click()

        time.sleep(1)

        bouton_un_client = self.driver.find_element(By.CSS_SELECTOR, 'li.ng-star-inserted:nth-child(1)')
        bouton_un_client.click()

        time.sleep(1)

        bouton_modif_client = self.driver.find_element(By.CSS_SELECTOR, 'a.ng-star-inserted:nth-child(4)')
        bouton_modif_client.click()

        txt_nom = self.driver.find_element(By.CSS_SELECTOR, '#mat-input-12')
        txt_nom.click()
        txt_nom.clear()
        txt_nom.send_keys("De Gaulle")

        bouton_enregistrer = self.driver.find_element(By.CSS_SELECTOR, '.mdc-button__label')
        bouton_enregistrer.click()

        time.sleep(2)

    def logout(self):
        bouton_logout = self.driver.find_element(By.CSS_SELECTOR, '.mat-toolbar > a:nth-child(7) > span:nth-child(1)')
        bouton_logout.click()

    def register(self):
        bouton_register = self.driver.find_element(By.CSS_SELECTOR,'.mat-toolbar > a:nth-child(4) > span:nth-child(1)')
        bouton_register.click()

        time.sleep(1)

        txt_email = self.driver.find_element(By.CSS_SELECTOR, '#mat-input-21')
        txt_email.click()
        txt_email.send_keys("felix.silvert@gmail.com")

        txt_nom = self.driver.find_element(By.CSS_SELECTOR, '#mat-input-22')
        txt_nom.click()
        txt_nom.send_keys("Silvert")

        txt_prenom = self.driver.find_element(By.CSS_SELECTOR, '#mat-input-23')
        txt_prenom.click()
        txt_prenom.send_keys("Félix")

        txt_adresse = self.driver.find_element(By.CSS_SELECTOR, '#mat-input-24')
        txt_adresse.click()
        txt_adresse.send_keys("59 rue Verte")

        txt_ville = self.driver.find_element(By.CSS_SELECTOR, '#mat-input-25')
        txt_ville.click()
        txt_ville.send_keys("Lille")

        txt_code_postal = self.driver.find_element(By.CSS_SELECTOR, '#mat-input-26')
        txt_code_postal.click()
        txt_code_postal.send_keys("59000")

        txt_password = self.driver.find_element(By.CSS_SELECTOR, '#mat-input-27')
        txt_password.click()
        txt_password.send_keys("azerty123")

        txt_password = self.driver.find_element(By.CSS_SELECTOR, '#mat-input-28')
        txt_password.click()
        txt_password.send_keys("azerty123")

        bouton_enregistrer = self.driver.find_element(By.CSS_SELECTOR, '.mdc-button__label')
        bouton_enregistrer.click()

        time.sleep(2)


    def fermeture(self):
        self.driver.close()


selenium = Selenium()
selenium.initialisation()
selenium.siteWeb()
selenium.loginAdmin()
selenium.modifProfil()
selenium.modifEvenement()
selenium.modifClient()
selenium.logout()
selenium.register()
selenium.fermeture()
