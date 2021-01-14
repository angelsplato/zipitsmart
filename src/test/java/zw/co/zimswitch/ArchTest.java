package zw.co.zimswitch;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("zw.co.zimswitch");

        noClasses()
            .that()
                .resideInAnyPackage("zw.co.zimswitch.service..")
            .or()
                .resideInAnyPackage("zw.co.zimswitch.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..zw.co.zimswitch.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
